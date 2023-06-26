import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'
//import Letreiro from 'componentes/Letreiro/letreiro';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Cross Black Eagle
                </h1>

                <p className={styles.paragrafo}>
                Bem-vindo ao Black Eagle, somos um box apaixonado por ajudar pessoas a alcançarem seus objetivos de condicionamento físico, superarem limites e transformarem suas vidas através do CrossFit. Aqui, temos o compromisso de fornecer um ambiente acolhedor, motivador e desafiador para que você possa atingir o seu melhor desempenho.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt="Imagem da parede do box"
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Logo Cross Black Eagle"
                />

            
            </div>  
        </div>
    )

    
}



// <Letreiro /> {/* Adicione o letreiro de fotos aqui */}