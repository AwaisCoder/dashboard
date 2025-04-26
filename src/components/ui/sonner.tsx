import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[hsl(0_0%_100%)] group-[.toaster]:text-[hsl(222.2_84%_4.9%)] group-[.toaster]:border-[hsl(214.3_31.8%_91.4%)] group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[hsl(215.4_16.3%_46.9%)]",
          actionButton:
            "group-[.toast]:bg-[hsl(222.2_47.4%_11.2%)] group-[.toast]:text-[hsl(210_40%_98%)]",
          cancelButton:
            "group-[.toast]:bg-[hsl(210_40%_96.1%)] group-[.toast]:text-[hsl(215.4_16.3%_46.9%)]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
