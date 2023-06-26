import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Black Eagle!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Eagle"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                O Cross Black Eagle é um box que tem como foco a dedicação com nossos alunos, buscando proporcionar uma experiência completa e satisfatória. Nossa missão é oferecer um ambiente acolhedor e motivador, onde pessoas de diferentes idades, níveis de condicionamento físico e objetivos possam se desenvolver e atingir seu potencial máximo.
            </p>
            <p className={styles.paragrafo}>
                Nossos serviços abrangem uma ampla gama de opções para atender às necessidades individuais de nossos membros. Oferecemos treinamentos de cross, que incluem exercícios funcionais de alta intensidade combinando com treinamento isolado para fortalecimento ou aumento de força na área extra de treino.
            </p>
            <p className={styles.paragrafo}>
                Nosso objetivo é promover um estilo de vida saudável e ativo, incentivando a prática regular de exercícios físicos e a adoção de hábitos alimentares equilibrados. Acreditamos que a modalidade vai além do treinamento físico, contribuindo para o desenvolvimento de habilidades como resistência, força, flexibilidade, coordenação e disciplina mental.
            </p>
            <p className={styles.paragrafo}>
                Além dos treinamentos, buscamos criar um ambiente comunitário, onde os membros se sintam parte de uma família.
            </p>
          
        </PostModelo>
    )
}