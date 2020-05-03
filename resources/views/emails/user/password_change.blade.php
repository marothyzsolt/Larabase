@component('mail::message')
Dear User!
Your password has been changed by an administrator.

@component('mail::panel')
    <h2>Password: <span>{{ $password }}</span></h2>
@endcomponent

@component('mail::button', ['url' => config('app.url')])
    Login
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
