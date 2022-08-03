import styles from './Avatar.module.css';

                        // Com a desestruturação, nos permite buscar apenas as propriedades especificas passadas no parâmetro da função. Nesse caso, as propriedades buscadas são hasBorder e src. Uma razão para se usar desestruturação no lugar de toda a props é poder atribuir valores padrões para essas propriedades. Como nesse caso, a propriedade hasBorder tem, por padrão, o valor de true.
export function Avatar({ hasBorder = true, src }) {
    return(
        <img className={hasBorder ? styles.avatarWithborder : styles.avatar} src={src} />
    )
}