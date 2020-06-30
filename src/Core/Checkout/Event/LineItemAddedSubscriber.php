<?php declare(strict_types=1);

namespace CLERKIO\Clerkio\Core\Checkout\Event;

use Shopware\Core\Checkout\Cart\Event\LineItemAddedEvent;
use Shopware\Core\Framework\Struct\ArrayStruct;
use Shopware\Core\Framework\Struct\Struct;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Session\Session;

class LineItemAddedSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return[
            LineItemAddedEvent::class => 'onLineItemAdded',
        ];
    }

    public function onLineItemAdded(LineItemAddedEvent $event): void
    {
        $event->getContext()->addExtension('product_count',new ArrayStruct());
    }
}
