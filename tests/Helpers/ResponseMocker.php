<?php


namespace Tests\Helpers;


use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\StreamInterface;

trait ResponseMocker
{
    protected function getResponseMock($streamInterfaceMock)
    {
        $mock = $this->getMockBuilder(ResponseInterface::class)
            ->getMock();
        $mock
            ->method("getBody")
            ->willReturn($streamInterfaceMock);
        return $mock;
    }

    protected function getStreamInterfaceMock($resultJsonData)
    {
        $mock = $this->getMockBuilder(StreamInterface::class)
            ->getMock();
        $mock
            ->method("getContents")
            ->willReturn($resultJsonData);
        return $mock;
    }
}
