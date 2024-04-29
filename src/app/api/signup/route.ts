import { singUpSchema } from "../../../types/signUpSchema";

export async function POST(req: Request) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const body: unknown = await req.json();
  const parseResult = singUpSchema.safeParse(body);

  if (parseResult.success) {
    // signing up...
  
    return Response.json({
      success: true
    }, {
      status:  201 
    });
  }

  const zodIssues = parseResult.error.issues;
  
  let zodErrors = {};
  zodIssues.forEach((issue) => {
    zodErrors = {
      ...zodErrors,
      [issue.path[0]]: issue.message
    }
  });

  return Response.json({
    errors: zodErrors
  }, {
    status: 400,
  });
}