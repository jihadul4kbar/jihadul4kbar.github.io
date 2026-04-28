---
slug: Middleware Laravel 12
title: Memahami cara kerja Midellware pada Laravel 12
authors: [jihadul4kbar]
tags: [Tutorial, Laravel, Web, Web Software Developer]
---

# Middleware
Middleware menyediakan mekanisme yang mudah untuk memeriksa dan memfilter permintaan HTTP yang masuk ke aplikasi Anda. Misalnya, Laravel menyertakan middleware yang memverifikasi bahwa pengguna aplikasi Anda telah diautentikasi. Jika pengguna tidak diautentikasi, middleware akan mengarahkan pengguna ke layar login aplikasi Anda. Namun, jika pengguna diautentikasi, middleware akan memungkinkan permintaan untuk berlanjut lebih jauh ke dalam aplikasi.[1]
<!-- truncate -->
## Membuat User Autentikasi
Membuat autentikasi pengguna dengan Laravel 12, menggunakan role yang disimpan di dalam tabel users dengan tahapan sebagai berikut.
### 1. Menambahkan kolom role pada tabel ```user```.
Buka file migrasi ```database/migrations/xxxx_xx_xx_create_users_table.php```
Tambahkan kode berikut di bagian kolom tabel:
```php title="database/migrations/xxxx_xx_xx_create_users_table.php"
     $table->enum('role', ['admin', 'petugas', 'pimpinan'])->default('petugas');
```
kode ini berfungsi untuk membuat role dengan tiga lever user yakni ```admin, petugas, dan pimpinan``` dimana role secara bawaannya adalah ```petugas```.

Jalankan migrasi untuk update struktur tabel pada database :
```php artisan migrate:fresh```
```migrate:fresh``` akan menghapus semua tabel lalu menjalankan ulang semua migrasi dari awal.
### 2. Tambahkan Konstanta Role di ```Model User```
```php title="app/Models/User.php"
    protected $fillable = [
        'name',
        'email',
        'password',
        'role', // Tambahkan atribut role
    ];

    // Helper methods untuk check role
    public function isAdmin()
    {
        return $this->role === 'admin';
    }

    public function isPetugas()
    {
        return $this->role === 'petugas';
    }

    public function isPimpinan()
    {
        return $this->role === 'pimpinan';
    }
```
Penjelasan
``` 'role', // Tambahkan atribut role```
Atribut role ditambahkan agar bisa menyimpan peran pengguna, seperti admin, petugas, atau pimpinan.
```
    public function isAdmin()
    {
        return $this->role === 'admin';
    }
```
Fungsi ini mengembalikan true jika nilai role dari user adalah 'admin'.
Fungsinya untuk memudahkan pengecekan apakah user adalah admin.
Kode ini merupakan bagian dari sistem manajemen user dengan role-based access. Dengan adanya helper method seperti isAdmin(), kamu bisa lebih mudah mengatur hak akses di controller, middleware, atau view, contohnya:
```
if (auth()->user()->isAdmin()) {
    // Akses khusus untuk admin
}
```
### 3. Membuat Middleware Role
Jalankan perintah berikut untuk membuat middleware CheckRole
```
php artisan make:middleware CheckRole
```
Ganti isi file CheckRole dengan kode berikut
```php title="app/Http/Middleware/CheckRole.php"
<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    public function handle(Request $request, Closure $next, ...$roles)
    {
        if(!Auth::check()) {
            return redirect('/login'); // Redirect to login if not authenticated
        }

        if(!in_array(Auth::user()->role, $roles)) {
            abort(403, 'Unauthorized');
        }

        return $next($request);
    }
}
```
Penjelasan 

```...$roles```: Mengizinkan kita mengirim lebih dari satu role.

```in_array(...)```: Cek apakah role user cocok dengan salah satu role yang diizinkan.

```abort(403)```: Jika tidak cocok, akses ditolak.
### 4. Daftarkan Middleware Role ke Kernel
Agar midlleware dapat berfungsi perlu dilakukan register middleware pada ```bootstrap/app.php```
tambahkan kode berikut pada pada file app.php
```php title="bootstrap/app.php"
<?php
use App\Http\Middleware\CheckRole;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        // Register alias middleware (untuk digunakan pada route)
        $middleware->alias(['role' => CheckRole::class]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
```
perhatikan pada bagian ``` $middleware->alias(['role' => CheckRole::class]);```
digunakan untuk memberi nama ```role``` untuk middleware kita agar bisa digunakan dalam route seperti``` middleware('role:admin')```.

### 5. Routing Berdasarkan Role
``` php title="routes/web.php"
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Semua user yang sudah login
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    });
    // Khusus admin
    Route::middleware(['role:admin'])->group(function () {
        Route::get('/admin', function () {
            return "Selamat datang Admin!";
        });
       // Route::resource('user', UserController::class);
    });
    // Khusus petugas biasa
    Route::middleware(['role:petugas'])->group(function () {
        Route::get('/petugas', function () {
            return "Selamat datang petugas!";
        });
        //Route::resource('/petugas', FiturPetugasController::class);
    });
    // Khusus pimpinan biasa
    Route::middleware(['role:Pimpinan'])->group(function () {
        Route::get('/pimpinan', function () {
            return "Selamat datang Pimpinan!";
        });
        //Route::resource('/lapaoran', LaporanController::class);
    });
    // Khusus admin dan petugas biasa
    Route::middleware(['role:admin,petugas'])->group(function () {
        Route::get('/transaksi', function () {
            return "Selamat datang petugas atau admin!";
        });
        //Route::resource('/transaksi', TransaksiController::class);
    });
});

```
Penjelasan:

Middleware ```auth:``` Pastikan hanya user login yang bisa akses.

Middleware ```role:admin```: Hanya bisa diakses user yang role-nya 'admin'.

Middleware ```role:petugas```: Hanya untuk user dengan role petugas.

Middleware ```role:pimpinan```: Hanya untuk user dengan role pimpinan.

Middleware ```role:admin,petugas```: Hanya untuk user role admin dan petugas.

### 6. Menambah user ke dalam tabel user berdasarkan role
jalankan perintah pada terminal 
```php
php artisan tinker
```

selanjutnya tambahkan user dengan perintah berikut 
```php
DB::table('users')->insert(['name' => 'Admin','email' => 'admin@contoh.com','password' => Hash::make('12345678'),'role' => 'admin']);
```
perintah untuk menambah user dengan nama ```Admin, email admin@contoh.com, password 12345678 dan role admin```

```php
DB::table('users')->insert(['name' => 'Petugas','email' => 'petugas@contoh.com','password' => Hash::make('12345678'),'role' => 'petugas']);
```
perintah untuk menambah user dengan nama ```Petugas, email petugas@contoh.com, password 12345678 dan role petugas```
```php
DB::table('users')->insert(['name' => 'Pimpinan','email' => 'pimpinan@contoh.com','password' => Hash::make('12345678'),'role' => 'pimpinan']);
```
perintah untuk menambah user dengan nama ```Pimpinan, email pimpinan@contoh.com, password 12345678 dan role pimpinan```

### 7. Membuat Login dan Logout 
jalankan perintah berikut untuk membuat ```AuthController.php``` pada folder Auth
```
php artisan make:controller Auth/AuthController
```
setelah berhasil maka buka file tersebut dan isi dengan kode berikut
```php title="app\Http\Controllers\Auth\AuthController.php"
<?php
namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function showLoginForm()
    {
        return view('auth.login');
    }

    public function login(Request $request)
    {
        // Validasi input
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        // Coba login
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            return redirect()->route('dashboard'); // Redirect ke dashboard setelah login
        }

        // Jika gagal, kembalikan dengan error
        return back()->withErrors([
            'email' => 'Email atau password salah.',
        ])->withInput();
    }
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/login')->with('status', 'Anda telah berhasil logout.');
    }
}

```
membuat halaman login pada folder auth dengan nama login.blade.php

```php title="resources\views\auth\login.blade.php"
      <form action="{{ route('login') }}" method="POST">
        @csrf
          <input type="email" name="email" required autocomplete="email" autofocus placeholder="Email">
          @error('email')
              {{ $message }}
          @enderror
          <input type="password" name="password" placeholder="Password" required autocomplete="current-password">
          @error('password')
              {{ $message }}
          @enderror
            <button type="submit">Sign In</button>
      </form>
```
Selanjutnya membuat halaman dashbord.blade.php 
```php title="resources\views\dashbord.blade.php"
<h3>Selamat datang {{ auth()->user()->name }}</h3><br>
      Role : {{ auth()->user()->role }}




  @if(auth()->user()->isAdmin())
  <p>Menu Untuk Admin</p><br>
    <a href="">Menu Untuk Admin</a>
  @endif
        
  @if(auth()->user()->isPetugas())
    <p>Menu Untuk Pegugas</p><br>
    <a href="">Menu Untuk Petugas</a>
  @endif

  @if(auth()->user()->isPimpinan())
    <p>Menu Untuk Pimpinan</p><br>
    <a href="">Menu Untuk pimpinan</a>
  @endif

<br>
    <form method="POST" action="{{ route('logout') }}">
        @csrf
        <button type="submit">Logout</button>
    </form>

```
### 8. Route Lengkap
berikut route lengkapnya 
``` php title="routes/web.php"
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;

Route::get('/', function () {
    return view('welcome');
});
// Auth Routes
Route::controller(AuthController::class)->group(function () {
    Route::get('login', 'showLoginForm')->name('login');
    Route::post('login', 'login');
    Route::post('logout', 'logout')->name('logout');
});
// Semua user yang sudah login
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
    // Khusus admin
    Route::middleware(['role:admin'])->group(function () {
        Route::get('/admin', function () {
            return "Selamat datang Admin!";
        });
       // Route::resource('user', UserController::class);
    });
    // Khusus petugas biasa
    Route::middleware(['role:petugas'])->group(function () {
        Route::get('/petugas', function () {
            return "Selamat datang petugas!";
        });
        //Route::resource('/petugas', FiturPetugasController::class);
    });
    // Khusus pimpinan biasa
    Route::middleware(['role:Pimpinan'])->group(function () {
        Route::get('/pimpinan', function () {
            return "Selamat datang Pimpinan!";
        });
        //Route::resource('/lapaoran', LaporanController::class);
    });
    // Khusus admin dan petugas biasa
    Route::middleware(['role:admin,petugas'])->group(function () {
        Route::get('/transaksi', function () {
            return "Selamat datang petugas atau admin!";
        });
        //Route::resource('/transaksi', TransaksiController::class);
    });
});
```
## Refrensi
[1] https://laravel.com/docs/12.x/middleware