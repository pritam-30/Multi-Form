export async function POST(req) {
  const body = await req.json();

  if (
    !body.name ||
    !body.age ||
    !body.gender ||
    !body.email ||
    !body.phone ||
    !body.address
  ) {
    return Response.json({
      success: false,
      message: "All fields are required",
    });
  }

  if (!/^\S+@\S+\.\S+$/.test(body.email)) {
    return Response.json({ success: false, message: "Invalid email format" });
  }

  if (!/^\d{10}$/.test(body.phone)) {
    return Response.json({ success: false, message: "Invalid phone number" });
  }

  return Response.json({
    success: true,
    message: "Form submitted successfully",
  });
}
