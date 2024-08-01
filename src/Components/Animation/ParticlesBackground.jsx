import Particles from 'react-tsparticles';
import particlesOptions from './Config/particle.config';
import { useCallback, useMemo } from 'react';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
    console.log('particles background', particlesOptions)
    const options = useMemo(() => {
        return {}
    }, [])

    const particlesInit = useCallback((engine) => {
        loadSlim(engine)
    }, [])
    return (
        <div className="particles-background">
            <Particles init={particlesInit} options={options} />
        </div>
    );
};

export default ParticlesBackground;