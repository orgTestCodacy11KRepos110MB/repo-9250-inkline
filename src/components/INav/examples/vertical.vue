<template>
    <INav vertical>
        <INavItem href="https://inkline.io">Link</INavItem>
        <INavItem :to="{ name: 'docs-components-nav' }">Router Link</INavItem>
        <INavItem>Item</INavItem>
        <INavItem disabled>Disabled</INavItem>
    </INav>
</template>
