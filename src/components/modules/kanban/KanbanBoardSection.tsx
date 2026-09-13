import KanbanBoardCard from 'components/modules/kanban/KanbanBoardCard';
import { KanbanBoard } from 'data/kanban';
import { SwiperSlide } from 'swiper/react';
import Swiper from 'components/base/Swiper';
import KanbanAddBoardCard from './KanbanAddBoardCard';

interface KanbanBoardSectionProps {
  title: string;
  description: string;
  boards: KanbanBoard[];
  changePreference?: boolean;
}

/** board sections + `+BoardSlider` of apps/kanban/boards.pug */
const KanbanBoardSection = ({
  title,
  description,
  boards,
  changePreference
}: KanbanBoardSectionProps) => {
  return (
    <div className="-mx-6 lg:-mx-10 px-6 lg:px-10 py-8 border-b border-subtle">
      <h4>{title}</h4>
      <p className="mb-6">
        {description} {changePreference && <a href="#!"> Change preference</a>}
      </p>

      <Swiper
        parentClassName="kanban-boards-slider"
        navIconClassName="text-xs"
        spaceBetween={24}
        slidesPerView={1}
        speed={800}
        breakpoints={{
          576: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          },
          1540: {
            slidesPerView: 4
          }
        }}
      >
        {boards.map(board => (
          <SwiperSlide key={board.id}>
            <KanbanBoardCard board={board} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <KanbanAddBoardCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default KanbanBoardSection;
