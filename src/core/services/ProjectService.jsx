import { useState } from 'react';

const useProjectService = () => {
    const [state, setState] = useState();
    return { state, setState };
};

export default useProjectService;
