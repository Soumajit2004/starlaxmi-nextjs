import * as Dialog from '@radix-ui/react-dialog';

const JoinGameDialog = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="btn lg:btn-lg w-48 btn-primary">Join Now</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-base-300" />
      <Dialog.Content className="fixed max-h-min w-96 bg-base-100 inset-5 font-sans px-10 py-5 rounded-lg duration-1000">
        <Dialog.Title>
          <h3 className={"text-2xl font-sans font-bold"}>
            Call to play
          </h3>
        </Dialog.Title>
        <Dialog.Description className="font-sans">
          Please call us to play the next game.
        </Dialog.Description>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className="btn btn-primary">Okay</button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default JoinGameDialog