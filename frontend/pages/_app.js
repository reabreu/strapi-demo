import Layout from "../components/Layout";
import withApollo from "../lib/apollo";
import App from "next/app";
import React from "react";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, isAuthenticated, ctx } = this.props;
    return (
      <>
        <Layout isAuthenticated={isAuthenticated} {...pageProps}>
          <Component {...pageProps} />
        </Layout>

        <style jsx global>
          {`
            a {
              color: white !important;
            }
            a:link {
              text-decoration: none !important;
              color: white !important;
            }
            a:hover {
              color: white;
            }
            .card {
              display: inline-block !important;
            }
            .card-columns {
              column-count: 3;
            }
          `}
        </style>
      </>
    );
  }
}
export default withApollo({ ssr: true })(MyApp);
