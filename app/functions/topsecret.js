exports.handler = async function (event, context) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "max-age=10",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  };
  const body = JSON.parse(event.body);
  if (body.username === "johndoe" && body.password == "qwerty") {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "The sky is blue.", status: "success" }),
    };
  } else {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "You are not authorized to access this data.",
        status: "failure",
      }),
    };
  }
};
