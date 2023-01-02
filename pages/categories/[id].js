import { characteristics, dummyCelebrities, heroCategories } from '#/dummy';
import Image from 'next/image';
import React from 'react'
import CategoryCard from '~/Cards/CategoryCard';
import Celebrity from '~/Cards/Celebrity';
import Autoscroll from '~/core/Autoscroll';
import Layout from '~/layout/Layout';

const Category = () => {
  return (
    <Layout>
        <section className="px-24 py-20">
            <header className="w-full flex flex-col items-center justify-center mb-10">
                <div className="flex justify-center space-x-3 leading-tight my-4">
                    <Image src="/virgo.svg" alt="Aries symbol" width={35} height={35} />
                    <h2 className="text-xl md:text-2xl lg:text-4xl text-center font-semibold font-display">
                        Virgo Celebrities
                    </h2>
                </div>
                <p className="text-xl font-medium w-3/4 text-center">Virgos want to help. They are kind, gentle, and supportive friends and lovers who use their incredible intellect and resourcefulness to problem-solve.</p>
            </header>
            <div className="py-20 grid grid-cols-2 items-center gap-10">
                <div className="w-[80%]">
                    <h2 className="text-5xl font-semibold mb-8">Characteristics</h2>
                    <ul className="space-y-6">
                        <li className="flex items-center">
                            <div className="bg-[#E849EB] p-2 rounded-full mr-3">
                                <Image src="/leo_w.svg" alt="leo logo" height={20} width={20}/>
                            </div>
                            <span className="font-medium text-xl">Their imaginations are always flowing, and they express themselves via art.</span>
                        </li>
                        <li className="flex items-center">
                            <div className="bg-[#E849EB] p-2 rounded-full mr-3">
                                <Image src="/leo_w.svg" alt="leo logo" height={20} width={20}/>
                            </div>
                            <span className="font-medium text-xl">Virgos are diligent workers who excel at what they do.</span>
                        </li>
                        <li className="flex items-center">
                            <div className="bg-[#E849EB] p-2 rounded-full mr-3">
                                <Image src="/leo_w.svg" alt="leo logo" height={20} width={20}/>
                            </div>
                            <span className="font-medium text-xl">Virgos thrive on academic and intimate connections.</span>
                        </li>
                    </ul>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {characteristics.map((data) => 
                        <CategoryCard data={data} key={data.id}/>
                    )}
                </div>
            </div>
        </section>
        <Autoscroll/>
        <section
            id="aries-celebrities"
            className="px-2 md:px-12 lg:px-24 my-20"
        >
            <div className="grid grid-cols-3 gap-8">
            {dummyCelebrities.map(celebrity => {
                return <Celebrity celebrity={celebrity} key={celebrity.id} />;
            })}
            </div>
        </section>
        <Autoscroll/>
        <section className="px-24 py-20">
            <div className="grid grid-cols-3 gap-8">
                {dummyCelebrities.map(celebrity => {
                    return <Celebrity celebrity={celebrity} key={celebrity.id} />;
                })}
            </div>
        </section>
        <section
            id=""
            className="grid grid-cols-2 items-center mt-20 mb-40 px-24"
            >
              <div className="w-[70%] space-y-6">
                <h1 className="text-3xl font-display font-bold">Recommendation</h1>
                <p className="font-medium text-xl">The fact that people have achieved a great deal for themselves shows you that you can achieve the same thing.</p>
                <p className="font-medium text-xl">There are a number of categories of signs that you can explore in order to get inspiration and motivation.</p>
              </div>
              <div className="w-full grid grid-cols-3 gap-10">
                {heroCategories.map((categoryData) => 
                  <CategoryCard data={categoryData} key={categoryData.id}/>
                )}
              </div>
        </section>
        <section className="px-24 py-20">
            <div className="grid grid-cols-3 gap-8">
                {dummyCelebrities.map(celebrity => {
                    return <Celebrity celebrity={celebrity} key={celebrity.id} />;
                })}
            </div>
        </section>
    </Layout>
  )
}

export default Category