<?php

namespace Tests\Concerns;

use App\User;
use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Auth\Middleware\Authorize;
use Illuminate\Contracts\Auth\Authenticatable as UserContract;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Foundation\Testing\TestResponse;
use ReflectionClass;
use Tests\TestCase;
use Tymon\JWTAuth\Facades\JWTAuth;

abstract class BaseCase extends TestCase
{
    protected UserContract $loginUser;

    protected array $middlewaresToDisable = [
        Authenticate::class,
        VerifyCsrfToken::class,
        \Tymon\JWTAuth\Http\Middleware\Authenticate::class,
        \Tymon\JWTAuth\Http\Middleware\BaseMiddleware::class,
        Authorize::class
    ];

    /**
     * @param UserContract $user
     * @param null $driver
     * @return TestCase
     */
    public function actingAs(UserContract $user, $driver = null): TestCase
    {
        $this->loginUser = $user;
        return parent::actingAs($user);
    }

    /**
     * @param string $uri
     * @param array $headers
     * @return TestResponse
     */
    public function getJson($uri, array $headers = []): TestResponse
    {
        return parent::getJson($uri, $this->addTokenToHeader($headers));
    }

    protected function addTokenToHeader($headers) : array
    {
        if (empty($this->loginUser)) {
            return $headers;
        }

        return array_merge($headers, [
            "Authorization" => "Bearer " . JWTAuth::fromUser($this->loginUser)
        ]);
    }

    public function withoutMiddleware($middleware = NULL)
    {
        if ($middleware === NULL || ! is_string($middleware)) {
            $middleware = [];
        } else if (is_string($middleware)) {
            $middleware = [$middleware];
        }
        $middleware = array_merge($middleware, $this->middlewaresToDisable);
        return parent::withoutMiddleware($middleware);
    }

    public function setClassPrivateProperty($object, $property, $value)
    {
        $reflection = new ReflectionClass($object);
        $reflectionProperty = $reflection->getProperty($property);
        $reflectionProperty->setAccessible(true);
        $reflectionProperty->setValue($object, $value);
    }
}
