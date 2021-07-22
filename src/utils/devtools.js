// будем настраивать наши инструменты разработчика
// импортируем React, так как это будет React компонент
import React from 'react';
// импортируем из библиотеки 'redux-devtools' компонент createDevTools
import { createDevTools } from 'redux-devtools';

// импортируем DockMonitor
import DockMonitor from 'redux-devtools-dock-monitor';

// импортируем LogMonitor
import LogMonitor from 'redux-devtools-log-monitor';

// создаем объект DevTools, который будет инициализироваться с помощью createDevTools()
// в методе createDevTools() создаем объект DockMonitor
// внутрь положим LogMonitor ничего не содержащий с темой 
const DevTools = createDevTools(
    // передаем параметры в DockMonitor
    // toggleVisibilityKey - сочетание клавиш переключения видимости DevTools
    // changeMonitorKey - сочетание клавиш переключения расположения монитора
    // defaultIsVisible - по умолчанию монитор видимый
    <DockMonitor
        toggleVisibilityKey='ctrl-h' 
        changeMonitorKey='ctrl-q' 
        defaultIsVisible={ true }  
    >
        <LogMonitor theme='tomorrow' />        
    </DockMonitor>
);

export default DevTools;
