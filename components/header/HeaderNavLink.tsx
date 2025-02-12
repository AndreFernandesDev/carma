import Link from "next/link";

type HeaderNavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function HeaderNavLink(props: HeaderNavLinkProps) {
  const { href, children } = props;

  return (
    <Link
      href={href}
      className="block h-8  pr-4 md:pr-0 font-semibold text-muted-foreground transition-colors group/link data-[active]:text-secondary hover:text-secondary"
    >
      {children}
      <div className="ml-auto md:ml-0 h-0.5 w-0 mt-0.5 bg-primary rounded-full transition-all group-data-[active]/link:w-6 group-hover/link:w-6"></div>
    </Link>
  );
}

export default HeaderNavLink;
