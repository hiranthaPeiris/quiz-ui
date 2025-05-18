import { useEffect, useState } from "react";
import { supabase } from '../utils/supabase'

  
  export default function RoadSigns() {

    const [signs, setSigns] = useState([]);

    useEffect(() => {
      getInstruments();
    }, []);

    async function getInstruments() {
      
      let { data: dsigns, error } = await supabase
        .from('signs')
        .select('*')
          
      setSigns(dsigns);
      console.log(dsigns);

    }

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {signs.map((sign) => (
              <a key={sign.id} href={sign.href} className="group">
                <img
                  alt={sign.sign_name}
                  src={sign.image}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <h3 className="mt-4 text-sm text-gray-700">{sign.sign_name}</h3>
                {/* <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  