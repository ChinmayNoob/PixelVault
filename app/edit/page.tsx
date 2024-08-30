"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function EditPage({
    searchParams: { publicId },
}: {
    searchParams: {
        publicId: string;
    };
}) {
    const [transformation, setTransformation] = useState<
        | undefined
        | "generative-fill"
        | "blur"
        | "grayscale"
        | "pixelate"
        | "bg-remove"
    >();

    const [pendingPrompt, setPendingPrompt] = useState("");
    const [prompt, setPrompt] = useState("");

    return (
        <section className="min-h-screen bg-gray-100 p-8">
            <Card className="max-w-4xl mx-auto">
                <CardContent className="p-6">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between items-center">
                            <h1 className="text-3xl font-bold text-gray-800">Edit Image</h1>
                            <p className="text-sm text-gray-500">ID: {publicId}</p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                variant="outline"
                                onClick={() => setTransformation(undefined)}
                                className="w-full sm:w-auto bg-red-600 text-white"
                            >
                                Clear All
                            </Button>

                            <Button onClick={() => setTransformation("blur")} className="w-full sm:w-auto">Apply Blur</Button>
                            <Button onClick={() => setTransformation("grayscale")} className="w-full sm:w-auto">Convert to Gray</Button>
                            <Button onClick={() => setTransformation("pixelate")} className="w-full sm:w-auto">Pixelate</Button>
                            <Button onClick={() => setTransformation("bg-remove")} className="w-full sm:w-auto">Remove Background</Button>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
                            <Input
                                value={pendingPrompt}
                                onChange={(e) => setPendingPrompt(e.currentTarget.value)}
                                className="w-full sm:w-64 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                                placeholder="Enter prompt for generative fill"
                            />
                            <Button
                                onClick={() => {
                                    setTransformation("generative-fill");
                                    setPrompt(pendingPrompt);
                                }}
                                className="w-full sm:w-auto px-4 py-3 hover:bg-slate-700 rounded-md transition duration-300 ease-in-out"
                            >
                                Apply Generative Fill
                            </Button>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card>
                                <CardContent className="p-4">
                                    <h2 className="text-xl font-semibold mb-4">Original Image</h2>
                                    <CldImage src={publicId} width="400" height="300" alt="Original image" className="w-full h-auto rounded-lg" />
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4">
                                    <h2 className="text-xl font-semibold mb-4">Transformed Image</h2>
                                    {transformation === "generative-fill" && (
                                        <CldImage
                                            src={publicId}
                                            width="1400"
                                            height="900"
                                            alt="Generative fill image"
                                            crop="pad"
                                            fillBackground={{
                                                prompt,
                                            }}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    )}
                                    {transformation === "blur" && (
                                        <CldImage
                                            src={publicId}
                                            width="1200"
                                            height="1400"
                                            blur="800"
                                            alt="Blurred image"
                                            className="w-full h-auto rounded-lg"
                                        />
                                    )}
                                    {transformation === "grayscale" && (
                                        <CldImage
                                            src={publicId}
                                            width="1200"
                                            height="1400"
                                            grayscale
                                            alt="Grayscale image"
                                            className="w-full h-auto rounded-lg"
                                        />
                                    )}
                                    {transformation === "pixelate" && (
                                        <CldImage
                                            src={publicId}
                                            width="1200"
                                            height="1400"
                                            pixelate
                                            alt="Pixelated image"
                                            className="w-full h-auto rounded-lg"
                                        />
                                    )}
                                    {transformation === "bg-remove" && (
                                        <CldImage
                                            src={publicId}
                                            width="1200"
                                            height="700"
                                            removeBackground
                                            alt="Background removed image"
                                            className="w-full h-auto rounded-lg"
                                        />
                                    )}
                                    {!transformation && (
                                        <p className="text-center text-gray-500 py-8">Select a transformation to see the result</p>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}