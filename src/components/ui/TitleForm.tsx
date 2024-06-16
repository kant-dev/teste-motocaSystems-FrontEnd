"use client"

interface TitileFormProps {
    title: string;
    className?: string;
}

const TitileForm = ({ title, className }: TitileFormProps) => {
    return <p className={className}>{title}</p>
}

export default TitileForm;
