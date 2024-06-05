import ChartData from "../Components/Fragments/ChartData";
import ButtonGrafik from "../Components/Fragments/ButtonGrafik";
import { totalEmisi, sektorEnergi, sektorIPPU, sektorPertanian, sektorKehutanan, sektorLimbah} from "../Data/dataVisualisasi";

import { useState, useEffect } from "react";


const Visualisasi = () => {
    const [selectedDiagram, setSelectedDiagram] = useState('total')

    useEffect(() => {
        setSelectedDiagram('total')
    },[])

    const optionSelectDiagram = (option) => {
        setSelectedDiagram(option)
    }
    return (
        <div className="mb-14 lg:px-28 lg:mb-36" id="data">
            <div className="px-7 pr-20 lg:px-0">
                <h1 className="font-semibold text-xl lg:text-[40px] lg:leading-tight lg:w-[500px]">Presentase Data Dalam Bentuk Diagram</h1>
            </div>
            <div className="flex justify-center items-center pt-10">
                {selectedDiagram === "total" && (
                    <ChartData 
                        data={totalEmisi}
                    />
                )}

                {selectedDiagram === "energi" && (
                    <ChartData 
                        data={sektorEnergi}
                    />
                )}

                {selectedDiagram === "IPPU" && (
                    <ChartData 
                        data={sektorIPPU}
                    />
                )}

                {selectedDiagram === "pertanian" && (
                    <ChartData 
                        data={sektorPertanian}
                    />
                )}
                
                {selectedDiagram === "kehutanan" && (
                    <ChartData 
                        data={sektorKehutanan}
                    />
                )}
                
                {selectedDiagram === "limbah" && (
                    <ChartData 
                        data={sektorLimbah}
                    />
                )}
            </div>
            <div className="pt-2">
                <p className="text-center text-xs">* 2018 - 2022</p>
            </div>
            <div className="flex gap-2 flex-wrap justify-center pt-3 lg:gap-6">
                <ButtonGrafik 
                text="Total Emisi"
                onClick={() => optionSelectDiagram('total')}
                opacity={selectedDiagram === "total" ? "opacity-100" : "opacity-50"}
                />
                <ButtonGrafik 
                text="Sektor Energi"
                onClick={() => optionSelectDiagram('energi')}
                opacity={selectedDiagram === "energi" ? "opacity-100" : "opacity-50"}
                />
                <ButtonGrafik 
                text="Sektor IPPU"
                onClick={() => optionSelectDiagram('IPPU')}
                opacity={selectedDiagram === "IPPU" ? "opacity-100" : "opacity-50"}
                />
                <ButtonGrafik 
                text="Sektor Pertanian"
                onClick={() => optionSelectDiagram('pertanian')}
                opacity={selectedDiagram === "pertanian" ? "opacity-100" : "opacity-50"}
                />
                <ButtonGrafik 
                text="Sektor Kehutanan"
                onClick={() => optionSelectDiagram('kehutanan')}
                opacity={selectedDiagram === "kehutanan" ? "opacity-100" : "opacity-50"}
                />
                <ButtonGrafik 
                text="Sektor Limbah"
                onClick={() => optionSelectDiagram('limbah')}
                opacity={selectedDiagram === "limbah" ? "opacity-100" : "opacity-50"}
                />
            </div>
            <div className="bg-biru py-4 px-10 text-center text-lg mt-10 text-white lg:font-semibold lg:px-96 lg:py-8">
                <h1 className="lg:text-2xl">Ayo Bekontribusi Dalam Mengurangi Emisi Karbon!</h1>
            </div>
        </div>
    );
};

export default Visualisasi;
