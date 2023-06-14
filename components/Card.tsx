import clsx from "clsx";

const Card = ({ className, children }) => {
    return (
        <div
            className={clsx(
                "rounded-3xl bg-white drop-shadow-xl px-10 py-4"
                , className
            )}>
            {children}
        </div>
    );
};

export default Card;