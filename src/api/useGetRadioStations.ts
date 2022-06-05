import {useEffect, useState} from "react";
import {RadioStation} from "src/types/radio-station.types";

export const useGetRadioStations = () => {
  const [radioStations, setRadioStations] = useState<RadioStation[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(()=> {
    setTimeout(()=> {
      setRadioStations([
        {
          id:"1",
          name: "Putin FM",
          frequency: "66,6",
          imageUrl: "https://www.reuters.com/resizer/RHuLhGQSMjYnpT3uAo5vhE3zgr4=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IWSZGSGEZBMSXLUK6B7HWQNVGQ.jpg"
        },
        {
          id:"2",
          name: "Dribble FM",
          frequency: "101,2",
          imageUrl: "https://wallpaperaccess.com/full/93279.jpg"
        },
        {
          id:"3",
          name: "Doge FM",
          frequency: "99,4",
          imageUrl: "https://wallpaperaccess.com/full/2871864.jpg"
        },
        {
          id:"4",
          name: "Ballads FM",
          frequency: "87,1",
          imageUrl: "https://wallpaperaccess.com/full/2871871.jpg"
        },
        {
          id:"5",
          name: "Maximum FM",
          frequency: "142,22",
          imageUrl: "https://wallpaperaccess.com/full/289477.jpg"
        }
      ])

      setLoading(false)
    }, 500)
  }, [])

  return {radioStations, loading} as const
}
