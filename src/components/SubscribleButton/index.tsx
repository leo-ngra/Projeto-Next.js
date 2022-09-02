import styles from './styles.module.scss';

export function SubscribleButton(){
    return (
        <button 
            type="button"
            className={styles.subscribleButton}
        >
            Subscribe now
        </button>
    );
}