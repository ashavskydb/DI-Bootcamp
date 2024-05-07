import React from 'react';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => (
    <div>
        <p>Click on the numbers to increase the counters.</p>
        <p>The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</p>
        
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <ErrorBoundary>
            <BuggyCounter />
            <BuggyCounter />
        </ErrorBoundary>
        
        <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
        <div>
            <ErrorBoundary>
                <BuggyCounter />
            </ErrorBoundary>
            <ErrorBoundary>
                <BuggyCounter />
            </ErrorBoundary>
        </div>
        
        <p>This counter is not inside of boundary. So if it crashes, all other components are deleted.</p>
        <BuggyCounter />
    </div>
);


export default App;
