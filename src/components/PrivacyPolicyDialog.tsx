import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
} from "@/components/ui/dialog";

export function PrivacyPolicyDialog({ children }: { children: React.ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Privacy Policy</DialogTitle>
                    <DialogDescription>
                        Last updated: February 2026
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 text-sm text-foreground/90 mt-4 pb-6">
                    <section className="space-y-3">
                        <h3 className="text-lg font-semibold text-foreground">1. Introduction</h3>
                        <p>
                            At Startwith, we respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit the Startwith website.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-lg font-semibold text-foreground">2. Information We Collect</h3>
                        <p>
                            We collect several types of information from and about users of our Website, including information:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>By which you may be personally identified, such as name and e-mail address ("personal information").</li>
                            <li>That is about you but individually does not identify you.</li>
                            <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-lg font-semibold text-foreground">3. How We Use Your Information</h3>
                        <p>
                            We use information that we collect about you or that you provide to us, including any personal information:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>To present our Website and its contents to you.</li>
                            <li>To provide you with information, products, or services that you request from us.</li>
                            <li>To fulfill any other purpose for which you provide it.</li>
                            <li>To notify you about changes to our Website or any products or services we offer or provide through it.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-lg font-semibold text-foreground">4. Data Security</h3>
                        <p>
                            We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure, and we cannot guarantee the security of your personal information transmitted to our Website.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-lg font-semibold text-foreground">5. Contact Information</h3>
                        <p>
                            To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:privacy@startwith.com" className="text-primary hover:underline">privacy@startwith.com</a>.
                        </p>
                    </section>
                </div>
            </DialogContent>
        </Dialog>
    );
}
