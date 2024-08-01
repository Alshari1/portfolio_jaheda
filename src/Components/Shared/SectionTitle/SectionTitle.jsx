const SectionTitle = ({title1, tittle2}) => {
    return (
        <div className="text-center mt-20 border-t-4 py-16 space-y-4">
            <p>{title1}</p>
            <h1 className="text-5xl">{tittle2}</h1>
        </div>
    );
};

export default SectionTitle;