<script lang="ts">
import { computed, defineComponent, inject } from 'vue';
import { uid } from '@grozav/utils';
import { TabsKey } from '@inkline/inkline/components/ITabs/mixin';

const componentName = 'ITab';

export default defineComponent({
    name: componentName,
    props: {
        /**
         * The title of the tab
         * @type String
         * @default
         * @name title
         */
        title: {
            type: String,
            default: ''
        },
        /**
         * The name of the tab, used as an identifier
         * @type String
         * @default uid()
         * @name name
         */
        name: {
            type: String,
            default(): string {
                return uid('tab');
            }
        }
    },
    setup(props) {
        const tabs = inject(TabsKey, null);

        const active = computed(() => tabs?.active.value === props.name);
        const classes = computed(() => ({
            '-active': active.value
        }));

        return {
            active,
            classes
        };
    }
});
</script>

<template>
    <div
        v-show="active"
        class="tab"
        :class="classes"
        role="tabpanel"
        :name="name"
        :aria-hidden="!active"
        :aria-labelledby="`tab-heading-${name}`"
    >
        <div class="tab-body">
            <!-- @slot default Slot for tab content -->
            <slot />
        </div>
    </div>
</template>