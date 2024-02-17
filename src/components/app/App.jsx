import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header, Footer } from '../interface';
import { Spinner } from '../ui';

const MainPage = lazy(() => import('components/pages/MainPage'));
const NotFoundPage = lazy(() => import('components/pages/NotFoundPage'));

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />

                <main>
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </Suspense>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
