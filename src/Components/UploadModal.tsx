"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import useUploadModal from "@/Hooks/useUploadModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";

const UploadModal = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const uploadModal = useUploadModal();

    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            artist: "",
            title: "",
            song: null,
            image: null,
        }
    });

    const onChange = (open: boolean) => {

        if (!open) {

            reset();

            uploadModal.onClose();
        }

    };

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {

        try {

        } catch (error) {

        }
    };

    return (
        <Modal
            title="Add A Song"
            description="Upload An MP3 File"
            isOpen={uploadModal.isOpen}
            onChange={onChange}
        >
            <form
                className="flex flex-col gap-y-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    id="title"
                    disabled={isLoading}
                    {...register("title", { required: true })}
                    placeholder="Song Name"
                />
                <Input
                    id="artist"
                    disabled={isLoading}
                    {...register('artist', { required: true })}
                    placeholder="Artist Name"
                />
                <div>
                    <div className="pb-1">
                        Upload Song
                    </div>
                    <Input
                        placeholder="Upload File"
                        disabled={isLoading}
                        type="file"
                        accept=".mp3"
                        id="song"
                        {...register('song', { required: true })}
                    />
                </div>
                <div>
                    <div className="pb-1">
                        Upload Song Image
                    </div>
                    <Input
                        placeholder="Upload File Image"
                        disabled={isLoading}
                        type="file"
                        accept="image/*"
                        id="image"
                        {...register('image', { required: true })}
                    />
                </div>
                <Button disabled={isLoading} type="submit">
                    Create
                </Button>
            </form>
        </Modal>
    )
};

export default UploadModal;