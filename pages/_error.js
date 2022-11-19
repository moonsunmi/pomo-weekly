function Error({ statusCode }) {
  // TODO: 404 page를 따로 만들었는데, 여기도 수정할 게 있을지 보자.
  console.log(typeof statusCode);
  return (
    <div className="flex justify-center">
      <p className="mainContainer justify-center">
        {`An error ${statusCode} occurred on server`}
      </p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err.statusCode;
  return { statusCode };
};

export default Error;
