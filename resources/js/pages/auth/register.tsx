import { Form, Head } from '@inertiajs/react';
import { GiHamburger } from 'react-icons/gi';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';

type Props = {
    passwordRules: string;
};

export default function Register({ passwordRules }: Props) {
    return (
        <div className="relative mx-auto h-auto w-full overflow-x-hidden rounded-2xl shadow-lg shadow-black/20">
            <div className="absolute bottom-0 h-2 w-full bg-linear-to-r from-tertiary to-primary"></div>
            <div className="px-6 py-10 font-hanken text-dark lg:px-10 lg:py-12">
                <Head title="Burgerin | Register" />

                <header className="mb-10 w-full text-center">
                    <div className="inline-flex rotate-6 rounded-xl bg-primary p-4 text-neutral shadow-lg shadow-black/20">
                        <GiHamburger size={30} />
                    </div>
                    <div>
                        <h1 className="mt-3 text-3xl font-bold text-dark">
                            Register
                        </h1>
                        <p className="mt-2">Silahkan Membuat Akun Anda</p>
                    </div>
                </header>

                <Form
                    {...store.form()}
                    resetOnSuccess={['password', 'password_confirmation']}
                    disableWhileProcessing
                    className="flex flex-col gap-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="name" className="uppercase">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        className="border-none bg-gray-200"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="name"
                                        name="name"
                                        placeholder="Full name"
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label
                                        className="uppercase"
                                        htmlFor="email"
                                    >
                                        Email address
                                    </Label>
                                    <Input
                                        id="email"
                                        className="border-none bg-gray-200"
                                        type="email"
                                        required
                                        tabIndex={2}
                                        autoComplete="email"
                                        name="email"
                                        placeholder="email@example.com"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <Label
                                        className="uppercase"
                                        htmlFor="email"
                                    >
                                        No Telphone
                                    </Label>
                                    <Input
                                        id="no_telp"
                                        className="border-none bg-gray-200"
                                        type='tel'
                                        required
                                        tabIndex={2}
                                        autoComplete="email"
                                        name="no_telp"
                                        placeholder="0123456789"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <Label
                                        className="uppercase"
                                        htmlFor="password"
                                    >
                                        Password
                                    </Label>
                                    <PasswordInput
                                        className="border-none bg-gray-200"
                                        id="password"
                                        required
                                        tabIndex={3}
                                        autoComplete="new-password"
                                        name="password"
                                        placeholder="Password"
                                        passwordrules={passwordRules}
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                <div className="grid gap-2">
                                    <Label
                                        className="uppercase"
                                        htmlFor="password_confirmation"
                                    >
                                        Confirm password
                                    </Label>
                                    <PasswordInput
                                        className="border-none bg-gray-200"
                                        id="password_confirmation"
                                        required
                                        tabIndex={4}
                                        autoComplete="new-password"
                                        name="password_confirmation"
                                        placeholder="Confirm password"
                                        passwordrules={passwordRules}
                                    />
                                    <InputError
                                        message={errors.password_confirmation}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="mt-4 flex h-12 w-full items-center justify-center rounded-lg text-lg font-bold text-neutral"
                                    tabIndex={5}
                                    data-test="register-user-button"
                                >
                                    {processing && <Spinner />}
                                    Create account
                                </Button>
                            </div>

                            <div className="text-muted-foreground text-center text-sm">
                                Already have an account?{' '}
                                <TextLink
                                    className="bg-linear-to-r from-primary to-tertiary bg-clip-text font-bold text-transparent"
                                    href={login()}
                                    tabIndex={6}
                                >
                                    Log in
                                </TextLink>
                            </div>
                        </>
                    )}
                </Form>
            </div>
        </div>
    );
}

Register.layout = {
    title: 'Create an account',
    description: 'Enter your details below to create your account',
};
