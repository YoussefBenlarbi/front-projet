// Import Swiper React components
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import picIMG from '../assets/t-shirt.jpg';
import CardCarouel from './CardCarouel';

const SweeperComp = () => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={8}
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide>
				<CardCarouel key={1} pic={picIMG} title={'Product 1'} />
			</SwiperSlide>
			<SwiperSlide>
				<CardCarouel key={2} pic={picIMG} title={'Product 2'} />
			</SwiperSlide>
			<SwiperSlide>
				<CardCarouel key={3} pic={picIMG} title={'Product 3'} />{' '}
			</SwiperSlide>
			<SwiperSlide>
				<CardCarouel key={4} pic={picIMG} title={'Product 4'} />
			</SwiperSlide>
			<SwiperSlide>
				<CardCarouel key={5} pic={picIMG} title={'Product 4'} />
			</SwiperSlide>
			<SwiperSlide>
				<CardCarouel key={6} pic={picIMG} title={'Product 4'} />
			</SwiperSlide>
			<SwiperSlide>
				<CardCarouel key={7} pic={picIMG} title={'Product 4'} />
			</SwiperSlide>
			<SwiperSlide>
				<CardCarouel key={8} pic={picIMG} title={'Product 4'} />
			</SwiperSlide>
		</Swiper>
	);
};

export default SweeperComp;
