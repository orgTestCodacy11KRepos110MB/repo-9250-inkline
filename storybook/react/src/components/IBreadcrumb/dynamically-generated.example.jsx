import React from 'react';
import { IBreadcrumb, IBreadcrumbItem } from '@inkline/inkline';

export function Example () {
    const items = [
        { title: 'Home', href: '/' },
        { title: 'Components', to: '/example' },
        { title: 'Breadcrumbs', active: true }
    ];

    return <IBreadcrumb>
        { items.map((item) =>
            <IBreadcrumbItem {...item} key={item.title}>
                {item.title}
            </IBreadcrumbItem>)
        }
    </IBreadcrumb>;
}