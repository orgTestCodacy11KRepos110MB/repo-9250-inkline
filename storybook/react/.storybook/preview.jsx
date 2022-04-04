import { light, dark } from './theme';
import '../../common/preview.scss';
import '../../../src/inkline.scss';
import { addons } from '@storybook/addons';
import {BrowserRouter, Link} from 'react-router-dom';
import { $inkline, Inkline } from '@inkline/inkline/plugin';

addons.getChannel().on('DARK_MODE', (isDarkMode) => {
    if (!$inkline.prototype) {
        return;
    }

    $inkline.prototype.value = {
        ...$inkline.prototype.value,
        options: {
            ...$inkline.prototype.value.options,
            colorMode: isDarkMode ? 'dark' : 'light'
        }
    };
});

export const parameters = {
    actions: {
        argTypesRegex: '^on[A-Z].*'
    },
    controls: {
        matchers: {
            date: /Date$/,
        },
    },
    darkMode: {
        stylePreview: true,
        dark,
        light
    }
}

const options = {
    routerComponent: Link
};

export const decorators = [
    (Story) => <Inkline options={options}>
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    </Inkline>
];