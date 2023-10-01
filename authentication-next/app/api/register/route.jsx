// import { connectMongoDB } from "@/app/lib/mongodb";
// import { NextResponse } from "next/server";
// // import User from "@/models/user";
// import bcrypt from "bcryptjs"
// import UserInfo from "@/app/components/UserInfo";

// export async function POST(req) {
//     try{
//       const {name, email, password}= await req.json()
//       const hashedPassword = await bcrypt.hash(password, 10)
//         await connectMongoDB()
//         // await User.create({name, email, password: hashedPassword})
//         await UserInfo.create({name, email, password: hashedPassword})

//       return NextResponse.json({message: "User registered successfully."},{status: 201})
//     }catch(error){
//         return NextResponse.json(
//      {message: "An error occurred while registering the user."},{status: 500})
//     }
// }


      ///////





import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/app/models/user";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB()
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}