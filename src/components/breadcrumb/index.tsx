import Link from "next/link";

type BreadcrumbProps = {
  productId: string;
};

const Breadcrumb = ({ productId }: BreadcrumbProps) => (
  <section className="breadcrumb">
    <div className="container">
      <ul className="breadcrumb-list">
        <li>
          <Link href="/">
            <i className="icon-home" />
          </Link>
        </li>
        <li>
          <Link href="/products" className="breadcrumb-link">
            {" "}
            All Products
          </Link>
        </li>
        <li>{productId}</li>
      </ul>
    </div>
  </section>
);

export default Breadcrumb;
