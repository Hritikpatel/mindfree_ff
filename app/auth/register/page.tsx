"use client"
import Image from "next/image";
export default function Home() {

	return (
		<div className="h-screen w-screen flex text-black ">
			<div className="w-1/2 h-full relative hidden md:block p-5" style={{
				backgroundImage: "url('/images/auth_image.png')",
				backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
			}}>
				
					<Image
						src="/images/logo.svg"
						alt="Logo"
						width={150}
						height={150}
						className="object-cover z-10"
						priority
					/>

				<div className="absolute bg-black/20 z-30 backdrop-blur-lg rounded-4xl top-20 left-7 px-3 py-2 text-accent font-normal text-lg transition-all hover:translate-x-1.5">
					<div className="flex gap-1 items-center">
						<Image
						src="/images/pattern-architecture_svgrepo.com.svg"
						alt="Meditation"
						width={25}
						height={15}
						className="object-cover mt-0.5"
						priority
						/>
						<p className="leading-none align-middle">Your mind matters!</p>
					</div>
				</div>
				<div className="absolute z-30 top-5 right-7 transition-all hover:scale-110">
					<Image
						src="/images/ellipse.svg"
						alt="ellipse"
						width={45}
						height={45}
						className="object-cover mt-0.5"
						priority
					/>
				</div>
				<div className="absolute bg-black/20 z-30 backdrop-blur-lg rounded-2xl bottom-20 left-7 text-accent font-normal text-sm/5 w-3xs transition-all hover:translate-x-1.5">
					<div className="relative flex gap-1 items-center px-4 py-5.5 pr-6">
						<p className="align-middle">Unlock your insights and take the next step<br/> towards emotional health.</p>
						<Image
							src="/images/up.svg"
							alt="ellipse"
							width={35}
							height={35}
							className="object-cover absolute top-3 right-3"
							priority
						/>
					</div>
				</div>
			</div>
			<div className="relative w-full md:w-1/2 flex items-center justify-center p-8 bg-gray-50 overflow-clip">
				<div className="-z-10 absolute -left-15 top-1/2">
						<Image
							src="/images/bg-flower.svg"
							alt="Logo"
							width={150}
							height={350}
							priority
						/>
				</div>
				<div className="z-10 absolute -right-15 top-1/12">
						<Image
							src="/images/bg-flower.svg"
							alt="Logo"
							width={150}
							height={350}
							priority
						/>
				</div>
				<div className="z-10 absolute -right-10 -bottom-10">
						<Image
							src="/images/bg-flower.svg"
							alt="Logo"
							width={150}
							height={350}
							priority
						/>
				</div>
				<div className="z-10 absolute -left-15 top-1/2">
						<Image
							src="/images/bg-flower.svg"
							alt="Logo"
							width={150}
							height={350}
							priority
						/>
				</div>
				<div className="w-full max-w-md space-y-8 z-20">
					<div className="text-left">
						<h2 className="text-4xl font-bold text-[#004D4D]">Start your journey</h2>
						<p className="mt-2 text-black font-light">Please enter your details</p>
					</div>

					<form className="mt-8 space-y-6">
						<div className="space-y-4">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700 px-2">
									Fullname
								</label>
								<input
									id="name"
									name="name"
									type="name"
									autoComplete="name"
									required
									placeholder="Ram Patel"
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#87CEEB] focus:border-blue-500"
								/>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 px-2">
									Email
								</label>
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									placeholder="ram@gmail.com"
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#87CEEB] focus:border-blue-500"
								/>
							</div>

							<div>
								<label htmlFor="password" className="block text-sm font-medium text-gray-700  px-2">
									Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									placeholder="ram's_secure_password"
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#87CEEB] focus:border-blue-500"
								/>
							</div>
							<div>
								<label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700  px-2">
									Confirm Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									placeholder="ram's_secure_confirm_password"
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#87CEEB] focus:border-blue-500"
								/>
							</div>
						</div>
						<div className="md:flex gap-4">
							<button
								type="submit"
								className="w-1/2 m-auto flex justify-center py-2 px-4 border border-transparent rounded-xl text-15 font-medium text-black bg-[#87CEEB] hover:bg-[#82c6e1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#87CEEB]  transition-all hover:scale-98"
							>
								Register as a therapist
							</button>
							<button
								type="submit"
								className="w-1/2 m-auto flex justify-center py-2 px-4 border border-transparent rounded-xl text-15 font-medium text-black bg-[#87CEEB] hover:bg-[#82c6e1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#87CEEB]  transition-all hover:scale-98"
							>
								Register as a user
							</button>
						</div>
					</form>

					<p className="mt-8 text-center text-sm text-gray-600">
						Already have an account?{' '}
						<a href="/auth/login" className="font-medium text-[#87CEEB] hover:text-blue-500">
							Sign in
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}