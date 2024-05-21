// Footer Component

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer className="w-full p-4 bg-gray-900 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="block w-96 mx-auto text-sm text-gray-500">
          Copyright © {year} AsthaIT. All rights reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
