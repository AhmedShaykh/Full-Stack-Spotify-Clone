"use client";
import React, { useEffect } from "react";
import Modal from "./Modal";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import useAuthModal from "@/Hooks/useAuthModal";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthModal = () => {

    const supabaseClient = useSupabaseClient();

    const router = useRouter();

    const { session } = useSessionContext();

    const { onClose, isOpen } = useAuthModal();

    useEffect(() => {

        if (session) {

            router.refresh();

            onClose();
        }

    }, [session, router, onClose]);

    const onChange = (open: boolean) => {

        if (!open) {
            onClose();
        }

    };

    return (
        <Modal
            title="Welcome Back"
            description="Login To Your Account."
            isOpen={isOpen}
            onChange={onChange}
        >
            <Auth
                supabaseClient={supabaseClient}
                providers={[]}
                magicLink={true}
                theme="dark"
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: '#404040',
                                brandAccent: '#22c55e'
                            }
                        }
                    }
                }}
            />
        </Modal>
    )
};

export default AuthModal;