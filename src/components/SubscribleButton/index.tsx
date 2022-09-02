import styles from './styles.module.scss';


interface SubscriptButtonProps {
    priceId: string;
}

export function SubscribleButton({ priceId }: SubscriptButtonProps){
    return (
        <button 
            type="button"
            className={styles.subscribleButton}
        >
            Subscribe now
        </button>
    );
}