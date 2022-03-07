import React from 'react'

import ThemeManager from 'Themes';
import { AppNavigator } from 'Navigation';
import { DataProvider } from 'Config'

const App = ({ params }) => {
    return (
        <ThemeManager>
            <DataProvider>
                <AppNavigator />
            </DataProvider>
        </ThemeManager>
    )
};

export default App;
