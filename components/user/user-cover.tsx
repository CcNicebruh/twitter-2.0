import { useModal } from '@lib/hooks/useModal';
import { Button } from '@components/ui/button';
import { NextImage } from '@components/ui/next-image';
import { Modal } from '@components/modal/modal';
import { ImageModal } from '@components/modal/image-modal';
import type { ImageData } from '@lib/types/file';

type UserCoverProps = {
  coverData?: ImageData | null;
};

export function UserCover({ coverData }: UserCoverProps): JSX.Element {
  const { open, openModal, closeModal } = useModal();

  return (
    <div className='mt-0.5 h-[200px]'>
      <Modal open={open} closeModal={closeModal}>
        <ImageModal imageData={coverData as ImageData} previewCount={1} />
      </Modal>
      {coverData ? (
        <Button
          className='relative h-full w-full rounded-none p-0 hover:brightness-75'
          onClick={openModal}
        >
          <NextImage
            imgClassName='object-cover'
            src={coverData.src}
            alt={coverData.alt}
            layout='fill'
            useSkeleton
          />
        </Button>
      ) : (
        <div className='h-full bg-line-reply-color' />
      )}
    </div>
  );
}