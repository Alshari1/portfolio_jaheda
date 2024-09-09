const SectionTitle = ({title1, tittle2}) => {
    return (
        <div style={{fontFamily:'Lato'}} className="text-center my-20 bg-[#0c182a] py-16 space-y-4">
            <p className="text-white">{title1}</p>
            <h1 className="text-5xl text-[#fec544] font-semibold">{tittle2}</h1>
        </div>
    );
};

export default SectionTitle;