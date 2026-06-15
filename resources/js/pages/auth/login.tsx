import { Form, Head } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { GiHamburger } from 'react-icons/gi';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    return (
        <div className="relative mx-auto h-auto w-full overflow-x-hidden rounded-2xl shadow-lg shadow-black/20">
            <div className="absolute bottom-0 h-2 w-full bg-linear-to-r from-tertiary to-primary"></div>

            <div className="px-6 py-10 font-hanken text-dark lg:px-10 lg:py-12">
                <Head title="Burgerin | Login" />

                <header className="mb-10 w-full text-center">
                    <div className="inline-flex rotate-6 rounded-xl bg-primary p-4 text-neutral shadow-lg shadow-black/20">
                        <GiHamburger size={30} />
                    </div>
                    <div>
                        <h1 className="mt-3 text-3xl font-bold text-dark">
                            Login
                        </h1>
                        <p className="mt-2">Selamat Datang Di Burgerin</p>
                    </div>
                </header>

                <Form
                    {...store.form()}
                    resetOnSuccess={['password']}
                    className="flex flex-col gap-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label
                                        htmlFor="email"
                                        className="uppercase"
                                    >
                                        Email address
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="border-none bg-gray-200"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        placeholder="email@example.com"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label
                                            htmlFor="password"
                                            className="uppercase"
                                        >
                                            Password
                                        </Label>
                                    </div>
                                    <PasswordInput
                                        id="password"
                                        name="password"
                                        className="border-none bg-gray-200"
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        placeholder="••••••••"
                                    />
                                    <div className="mt-3 flex w-full items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <Checkbox
                                                className="border border-black text-neutral"
                                                id="remember"
                                                name="remember"
                                                tabIndex={3}
                                            />
                                            <Label htmlFor="remember">
                                                Remember me
                                            </Label>
                                        </div>
                                        <InputError message={errors.password} />
                                        {canResetPassword && (
                                            <TextLink
                                                href={request()}
                                                className="ml-auto text-xs text-primary"
                                                tabIndex={5}
                                            >
                                                Forgot your password?
                                            </TextLink>
                                        )}
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="mt-4 flex h-12 w-full items-center justify-center rounded-lg text-lg font-bold text-neutral"
                                    tabIndex={4}
                                    disabled={processing}
                                    data-test="login-button"
                                >
                                    {processing && <Spinner />}
                                    Login
                                    <ArrowRight />
                                </Button>
                            </div>

                            <div className="text-muted-foreground text-center text-sm">
                                Don't have an account?{' '}
                                <TextLink
                                    className="bg-linear-to-r from-primary to-tertiary bg-clip-text font-bold text-transparent"
                                    href={register()}
                                    tabIndex={5}
                                >
                                    Register
                                </TextLink>
                            </div>
                        </>
                    )}
                </Form>

                {status && (
                    <div className="mb-4 text-center text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}
            </div>
        </div>
    );
}

Login.layout = {
    title: 'Log in to your account',
    description: 'Enter your email and password below to log in',
};
