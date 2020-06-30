<?php declare(strict_types=1);

namespace CLERKIO\Clerkio;

use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\InstallContext;
use Shopware\Core\Framework\Plugin\Context\DeactivateContext;
use Shopware\Core\Framework\Plugin\Context\ActivateContext;
use Symfony\Component\DependencyInjection\ContainerBuilder;


class Clerkio extends Plugin
{
    public function build(ContainerBuilder $container): void
    {
        parent::build($container);
    }

    public function install(InstallContext $installContext): void
    {
        parent::install($installContext);
    }

    public function activate(ActivateContext $activateContext): void
    {
        parent::activate($activateContext);
    }

    public function deactivate(DeactivateContext $deactivateContext): void
    {
        parent::deactivate($deactivateContext);
    }

}
