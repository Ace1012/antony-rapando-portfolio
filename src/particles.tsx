import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";
import { Engine, IOptions, RecursivePartial } from "tsparticles-engine";
import particlesConfig from "./config/configParticles";

const ParticlesComponent = () => {
    const options = useMemo(() => {
        return particlesConfig.fire as RecursivePartial<IOptions>
    },[]);

    const particlesInit = useCallback(async (engine:Engine) => {
        await loadSlim(engine);
        // await loadFull(engine);
    },[])

  return <Particles init={particlesInit} options={options}/>;
};

export default ParticlesComponent;
