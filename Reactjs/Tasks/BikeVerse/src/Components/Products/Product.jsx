import React from 'react'
import './Product.css'
import { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { useParams } from 'react-router-dom';

const ProductData = [
    //=============================================================>>> Honda <<<=============================================================
    {
        "image": "https://www.hondabigwing.in/Content/images/CB350_newModel/Color/DLX/Mat_Marshal_Green_Metallic_dev1.png",
        "name": "CB350",
        "cost": "2,00,000",
        "company": "Honda",
        "rating": "4.5",
        "cart": false
    },
    {
        "image": "https://imgd.aeplcdn.com/664x374/bw/ec/22017/Honda-CB-Unicorn-160-Side-66834.jpg?v=201711021421&q=80",
        "name": "CB Unicorn 160",
        "cost": "1,05,000",
        "company": "Honda",
        "rating": "4.3",
        cart: false
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnE1c8IHTlfV7NGAbnJXQ_DzkxY31L3iUpxA&s",
        "name": "Shine",
        "cost": "78,000",
        "company": "Honda",
        "rating": "4.4",
        cart: false
    },
    {
        "image": "https://bd.gaadicdn.com/processedimages/honda/honda-cb-trigger/494X300/m_honda-cb-trigger_3.jpg",
        "name": "Trigger",
        "cost": "90,000",
        "company": "Honda",
        "rating": "4.1",
        "cart": false
    },
    {
        "image": "https://imgd.aeplcdn.com/1280x720/bw/ec/21058/Honda-CB-Hornet-160R-2018-Side-124568.jpg?wm=0",
        "name": "Hornet 160R",
        "cost": "1,10,000",
        "company": "Honda",
        "rating": "4.4",
        "cart": false
    },
    // ===========================================================>>> Enfield <<<==============================================================
    {
        "image": "https://bikes.motobank.co.uk/storage/royal-enfield/continental-gt-650-twin-1400/h/continental-gt-650-special-ed-1400-hero.jpg",
        "name": "Continental GT 650",
        "cost": "3,30,000",
        "company": "Enfield",
        "rating": "4.6",
        "cart": false
    },
    {
        "image": "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/new-classic-350/studio-shots/new/cammando-sand.png",
        "name": "Classic 350",
        "cost": "2,20,000",
        "company": "Enfield",
        "rating": "4.5",
        cart: false
    },
    {
        "image": "https://assets.otocapital.in/production/orange-crush-royal-enfield-interceptor-650-image.jpeg",
        "name": "Interceptor 650",
        "cost": "3,00,000",
        "company": "Enfield",
        "rating": "4.7",
        "cart": false
    },
    {
        "image": "https://cdn.motor1.com/images/mgl/rMwRr/s3/2021-royal-enfield-himalayan.jpg",
        "name": "Himalayan",
        "cost": "2,30,000",
        "company": "Enfield",
        "rating": "4.4",
        "cart": false
    },
    {
        "image": "https://imgd.aeplcdn.com/1280x720/bw/ec/33559/Royal-Enfield-Thunderbird-500X-Side-122880.jpg?wm=0",
        "name": "Thunderbird X",
        "cost": "1,60,000",
        "company": "Enfield",
        "rating": "4.3",
        "cart": false
    },
    // ==========================================================>>>Yamaha <<<=================================================================
    {
        "image": "https://imgd.aeplcdn.com/370x208/n/cw/ec/158528/yamaha-r15-right-side-view0.jpeg?isig=0&q=80",
        "name": "YZF R15 V4",
        "cost": "1,81,000",
        "company": "Yamaha",
        "rating": "4.7",
        cart: false
    },
    {
        "image": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20210618012311_FZ_X_India_1.jpg&w=386&h=256&q=90&c=1",
        "name": "FZ-X",
        "cost": "1,20,000",
        "company": "Yamaha",
        "rating": "4.4",
        "cart": false
    },
    {
        "image": "https://www.yamaha-motor-india.com/theme/v4/images/webp_images/fz_series_all/fzs-fi-new/color/color-02.webp",
        "name": "FZS V3",
        "cost": "1,15,000",
        "company": "Yamaha",
        "rating": "4.3",
        "cart": false
    },
    {
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/3/296473206/SF/GA/WY/187114653/yamaha-mt-15-tame-the-darkness-bike.png",
        "name": "MT-15",
        "cost": "1,60,000",
        "company": "Yamaha",
        "rating": "4.6",
        "cart": false
    },
    {
        "image": "https://shop.yamaha-motor-india.com/cdn/shop/files/blue_300x.png?v=1702465199",
        "name": "Yamaha R3",
        "cost": "3,50,000",
        "company": "Yamaha",
        "rating": "4.5",
        "cart": false
    },
    // ===========================================================>>> <<<=====================================================================
    {
        "image": "https://images.carandbike.com/bike-images/large/triumph/bonneville-t100/triumph-bonneville-t100.jpg?v=35",
        "name": "Bonneville T100",
        "cost": "9,99,000",
        "company": "Triumph",
        "rating": "4.4",
        "cart": false
    },
    {
        "image": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/49464/suzuki-intruder-side6.jpeg",
        "name": "Intruder 150",
        "cost": "1,28,000",
        "company": "Suzuki",
        "rating": "4.3",
        cart: false
    },
    {
        "image": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/127059/speed-twin-900-right-side-view-2.jpeg?isig=0",
        "name": "Street Twin",
        "cost": "8,45,000",
        "company": "Triumph",
        "rating": "4.5",
        "cart": false
    },
    {
        "image": "https://static.autox.com/uploads/bikes/2024/02/bajaj-dominar-400.jpg",
        "name": "Dominar 400",
        "cost": "2,24,000",
        "company": "Bajaj",
        "rating": "4.4",
        cart: false
    },
    {
        "image": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/121719/tiger-1200-right-side-view-7.png?isig=0",
        "name": "Tiger 850 Sport",
        "cost": "11,45,000",
        "company": "Triumph",
        "rating": "4.4",
        "cart": false
    },
    {
        "image": "https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages-Webp/RTR-160-4V/Desktop/Row-07-Wep_Image_750w-x-536h-px_a.webp",
        "name": "Apache RTR 160 4V",
        "cost": "1,23,000",
        "company": "TVS",
        "rating": "4.6",
        cart: false
    },
    {
        "image": "https://imgd.aeplcdn.com/664x374/bw/ec/23555/Triumph-Thruxton-R-Side-73456.jpg?v=201711021421&q=80",
        "name": "Thruxton RS",
        "cost": "12,50,000",
        "company": "Triumph",
        "rating": "4.5",
        "cart": false
    },
    {
        "image": "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/triumph-select-model-korosi-red--graphite-1633452847137.jpg?q=80",
        "name": "Tiger Sport 660",
        "cost": "8,95,000",
        "company": "Triumph",
        "rating": "4.3",
        "cart": false
    },
    {
        "image": "https://assets.otocapital.in/prod/black-&-silver-bajaj-platina-100-image.jpeg",
        "name": "Platina 100",
        "cost": "52,000",
        "company": "Bajaj",
        "rating": "4.2",
        cart: false
    },
    {
        "image": "https://cdni.autocarindia.com/utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Suzuki-Access-125-160320211032.jpg",
        "name": "Access 125",
        "cost": "82,000",
        "company": "Suzuki",
        "rating": "4.6",
        cart: false
    },
    {
        "image": "https://imgd.aeplcdn.com/1280x720/n/bw/models/colors/hero-select-model-black-grey-stripe-1706531424390.png",
        "name": "Splendor Plus",
        "cost": "60,000",
        "company": "Hero",
        "rating": "4.5",
        cart: false
    },
    {
        "image": "https://static.autox.com/uploads/bikes/2017/05/1486028233-tvs-jupiter.jpg",
        "name": "Jupiter",
        "cost": "73,000",
        "company": "TVS",
        "rating": "4.5",
        cart: false
    },
    {
        "image": "https://imgd.aeplcdn.com/664x374/bw/ec/39027/Hero-Passion-Pro-110-Side-152360.jpg?wm=0&q=80",
        "name": "Passion Pro",
        "cost": "70,000",
        "company": "Hero",
        "rating": "4.2",
        cart: false
    },
    {
        "image": "https://cdn.bajajauto.com/-/media/assets/bajajauto/360degreeimages/bikes/pulsar/pulsar-150/single-disc/black-red/00.png",
        "name": "Pulsar 150",
        "cost": "1,00,000",
        "company": "Bajaj",
        "rating": "4.5",
        cart: false
    },
    {
        "image": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/49452/hf-deluxe-right-side-view-2.png?isig=0",
        "name": "HF Deluxe",
        "cost": "55,000",
        "company": "Hero",
        "rating": "4.3",
        cart: false
    },
    {
        "image": "https://imgd.aeplcdn.com/1280x720/n/bw/models/colors/suzuki-select-model-metallic-matte-black-no-2-2023-1686037589247.png",
        "name": "Gixxer SF",
        "cost": "1,36,000",
        "company": "Suzuki",
        "rating": "4.4",
        cart: false
    },
    //==========================================================>>> KTM <<<===================================================================
    {
        "image": "https://www.drivespark.com/bikes-photos/models/750x550/ktm-rc-200-[2021]_1631857150.jpg/3/x.pagespeed.ic.h65lC-1vy2.jpg",
        "name": "RC 200",
        "cost": "2,09,000",
        "company": "KTM",
        "rating": "4.4",
        "cart": false
    },
    {
        "image": "https://www.cycleworld.com/resizer/VE_hj7dQBjAIkXHpFNYkxVM6Ytg=/arc-photo-octane/arc3-prod/public/SRPID3ALU5EGBPFJLE3IRM7JCA.jpg",
        "name": "390 Duke",
        "cost": "2,85,000",
        "company": "KTM",
        "rating": "4.5",
        "cart": false
    },
    {
        "image": "https://centralization-images.s3.ap-south-1.amazonaws.com/small_9_KTM_250_Duke_38fbe6899f.png",
        "name": "250 Duke",
        "cost": "2,33,000",
        "company": "KTM",
        "rating": "4.3",
        "cart": false
    },
    {
        "image": "https://assets.otocapital.in/prod/dark-galvano-black-ktm-adventure-390-image.jpeg",
        "name": "390 Adventure",
        "cost": "3,30,000",
        "company": "KTM",
        "rating": "4.6",
        "cart": false
    },
    {
        "image": "https://images.medialinksonline.com/imagestream/18510/5481865x1024x0_FFFFFF_L_.jpg",
        "name": "1290 Super Duke GT",
        "cost": "20,00,000",
        "company": "KTM",
        "rating": "4.7",
        "cart": false
    },

    //==========================================================>>> Kawasaki <<<===============================================================
    {
        "image": "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/kawasaki-select-model-metallic-moondust-gray-1718372335944.png?q=80",
        "name": "Ninja 300",
        "cost": "3,38,000",
        "company": "Kawasaki",
        "rating": "4.6",
        "cart": false
    },
    {
        "image": "https://mcn-images.bauersecure.com/wp-images/4468/615x405/01ninja-650.jpg",
        "name": "Ninja 650",
        "cost": "6,40,000",
        "company": "Kawasaki",
        "rating": "4.5",
        "cart": false
    },
    {
        "image": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/171099/z650rs-right-side-view.png?isig=0",
        "name": "Z650",
        "cost": "6,00,000",
        "company": "Kawasaki",
        "rating": "4.4",
        "cart": false
    },
    {
        "image": "https://imgd.aeplcdn.com/1280x720/bw/models/kawasaki-versys-650-standard20200812111500.jpg",
        "name": "Versys 650",
        "cost": "7,20,000",
        "company": "Kawasaki",
        "rating": "4.3",
        "cart": false
    },
    {
        "image": "https://www.webbikeworld.com/2021-kawasaki-ninja-1000-sx/2021-kawasaki-ninja-1000sx-1/",
        "name": "Ninja 1000SX",
        "cost": "12,00,000",
        "company": "Kawasaki",
        "rating": "4.7",
        "cart": false
    },
    //============================================================>>> BMW <<<================================================================
    {
        "image": "https://www.drivespark.com/bikes-photos/models/750x550/g-310-r_1658393397.jpg/3/x.pagespeed.ic.Iafuzn_8ay.jpg",
        "name": "G 310 R",
        "cost": "2,90,000",
        "company": "BMW",
        "rating": "4.5",
        "cart": false
    },
    {
        "image": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/126519/g-310-gs-right-side-view.jpeg?isig=0",
        "name": "G 310 GS",
        "cost": "3,40,000",
        "company": "BMW",
        "rating": "4.4",
        "cart": false
    },
    {
        "image": "https://www.wunderlich.de/media/2f/a6/b1/1670942998/F850GS_Nachher_540x360.jpg",
        "name": "F 850 GS",
        "cost": "12,00,000",
        "company": "BMW",
        "rating": "4.6",
        "cart": false
    },
    {
        "image": "https://images.91wheels.com/assets/b_images/main/models/profile/profile1661763717.jpg?width=420&q=60?w=420&q=60",
        "name": "R 1250 GS",
        "cost": "22,00,000",
        "company": "BMW",
        "rating": "4.8",
        "cart": false
    },
    {
        "image": "https://imgd.aeplcdn.com/664x374/bw/models/bmw-r-1250-r-standard20190924173032.jpg?q=80",
        "name": "R 1250 R",
        "cost": "16,00,000",
        "company": "BMW",
        "rating": "4.5",
        "cart": false
    },

]

function Product() {

    const { id } = useParams();

    const [data, setData] = useState(ProductData)
    const filteredData = data.filter((item) => item.company === id);
    if (filteredData.length !== data.length) {
        setData(filteredData);
    }


    const SortData = () => {
        const dummy = [...data]
        dummy.sort((a, b) => parseInt(a.cost.replace(/,/g, ''), 10) - parseInt(b.cost.replace(/,/g, ''), 10));
        setData(dummy);
    }

    const [searchValue, setSearchValue] = useState('')
    const SearchParameter = (e) => {
        const searchValue = e.target.value;
        setSearchValue(searchValue)
    }
    const SearchedDt = searchValue.toLowerCase();
    const filterOnSearch = data.filter((item) => {
        const nameFilter = item.name.toLowerCase().includes(SearchedDt);
        const companyFilter = item.company.toLowerCase().includes(SearchedDt);
        return nameFilter || companyFilter;
    })

    const displayData = SearchedDt ? filterOnSearch : data;

    const handleCartClick = (index) => {
        const updatedData = displayData.map((item, i) => {
            if (i === index) {
                return { ...item, cart: !item.cart };
            }
            return item;
        });
        setData(updatedData);
    }


    return (
        <>
            <div className='Products-div'>
                <div className='heading'>{`${id}`} Bikes</div>
                <div className='butInDiv'>
                    <div className='InAndSearch'>
                        <input type='text' className='input-field' placeholder='Seach Here' onChange={(e) => SearchParameter(e)} />
                        <CiSearch className='searchIcon' />
                    </div>
                    <button className='sortButton' onClick={SortData}>Sort</button>
                </div>
                <div className='Products'>
                    {displayData.map((item, index) => {
                        return (
                            <div className='Product' key={index}>
                                <div className='Product-name'>{item.name}</div>
                                <img src={item.image} alt='Product' className='Product-image' />
                                <div className='Product-CCR'>
                                    <h2 className='Product-cost'>₹{item.cost}/-</h2>
                                    <div className='Product-CR'>
                                        <div className='Product-company'>{item.company}</div>
                                        <div className='Product-rating'>{item.rating}⭐</div>
                                    </div>
                                </div>
                                <button className={item.cart ? 'Carted-button' : 'Cart-button'} onClick={() => handleCartClick(index)}>{item.cart ? "Added" : "Add to Cart"}</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Product
