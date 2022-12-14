import styles from './LinksButton.module.scss'

export default function LinksButton(props)
{

    return (
        <div className={styles.link}>
            <span className={styles.linkText}>{props.children}</span>
            <svg  className={styles.linkArrow} viewBox="0 0 16 16" style={{height: '20px', width: '20px'}}>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M8 9.00098L11.001 6C11.3747 6 11.6322 6.10937 11.7734 6.32812C11.9147 6.54688 11.9899 6.73828 11.999 6.90234V6.99805L8 10.9971L4.00098 6.99805V6.88867C4.03744 6.51953 4.20833 6.25977 4.51367 6.10938C4.65039 6.03646 4.81217 6 4.99902 6L8 9.00098Z"></path>
            </svg>
        </div>
    );
}